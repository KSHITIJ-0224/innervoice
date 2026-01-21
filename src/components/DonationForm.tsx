import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, Smartphone, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayInstance {
  open: () => void;
  on: (event: string, handler: () => void) => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
}

const predefinedAmounts = [100, 500, 1000, 2500, 5000, 10000];

const DonationForm = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    setCustomAmount(value);
    if (numValue >= 10) {
      setAmount(numValue);
    }
  };

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleDonate = async () => {
    if (amount < 10) {
      toast({
        title: "Invalid Amount",
        description: "Minimum donation amount is ₹10",
        variant: "destructive",
      });
      return;
    }

    if (!donorName.trim() || !donorEmail.trim() || !donorPhone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = donorPhone.replace(/\D/g, "").slice(-10);
    if (!phoneRegex.test(cleanPhone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit Indian phone number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      toast({
        title: "Payment Error",
        description: "Failed to load payment gateway. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Note: In production, you should create order_id from your backend
    // This is a client-side only integration for demo purposes
    const options: RazorpayOptions = {
      key: "rzp_test_YOUR_KEY_HERE", // Replace with your Razorpay key
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Inner Voice Foundation",
      description: `Donation of ₹${amount.toLocaleString("en-IN")}`,
      handler: function (response: RazorpayResponse) {
        toast({
          title: "Thank You! 🙏",
          description: `Your donation of ₹${amount.toLocaleString("en-IN")} was successful. Payment ID: ${response.razorpay_payment_id}`,
        });
        // Reset form
        setAmount(1000);
        setCustomAmount("");
        setDonorName("");
        setDonorEmail("");
        setDonorPhone("");
      },
      prefill: {
        name: donorName,
        email: donorEmail,
        contact: cleanPhone,
      },
      theme: {
        color: "#2d8a7a", // Matches our accent color
      },
      modal: {
        ondismiss: function () {
          setIsLoading(false);
        },
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
    setIsLoading(false);
  };

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
          <Heart className="w-6 h-6 text-accent-foreground" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-foreground">Make a Donation</h3>
          <p className="text-sm text-muted-foreground">Every rupee makes a difference</p>
        </div>
      </div>

      {/* Amount Selection */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-3">
          Select Amount (₹)
        </label>
        <div className="grid grid-cols-3 gap-3 mb-3">
          {predefinedAmounts.map((value) => (
            <motion.button
              key={value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAmountClick(value)}
              className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                amount === value && !customAmount
                  ? "bg-accent text-accent-foreground shadow-glow"
                  : "bg-secondary text-foreground hover:bg-accent/20"
              }`}
            >
              ₹{value.toLocaleString("en-IN")}
            </motion.button>
          ))}
        </div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
            ₹
          </span>
          <input
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="w-full pl-8 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            min="10"
          />
        </div>
      </div>

      {/* Donor Information */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            placeholder="Your full name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            maxLength={100}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={donorEmail}
            onChange={(e) => setDonorEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            maxLength={255}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Phone *
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={donorPhone}
            onChange={(e) => setDonorPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            maxLength={15}
          />
        </div>
      </div>

      {/* Payment Methods Info */}
      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <CreditCard className="w-4 h-4" />
          <span>Cards</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-4 h-4" />
          <span>UPI</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Building2 className="w-4 h-4" />
          <span>Netbanking</span>
        </div>
      </div>

      {/* Donate Button */}
      <Button
        variant="accent"
        size="xl"
        className="w-full"
        onClick={handleDonate}
        disabled={isLoading}
      >
        {isLoading ? (
          "Processing..."
        ) : (
          <>
            <Heart className="w-5 h-5" />
            Donate ₹{amount.toLocaleString("en-IN")}
          </>
        )}
      </Button>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex flex-wrap gap-3 justify-center text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>80G Tax Benefit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>Instant Receipt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
