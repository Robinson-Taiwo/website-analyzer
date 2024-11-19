import { useState } from 'react'
import {  Check, CreditCard,  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PricingModal({ onClose }: { onClose: () => void }) {
  const [credits, setCredits] = useState(100);
  const [customCredits, setCustomCredits] = useState("");

  const creditOptions = [
    { value: 100, price: 49 },
    { value: 250, price: 99 },
    { value: 500, price: 179 },
    { value: 1000, price: 299 },
  ];

  const handleCustomCredits = (value: string) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue > 0) {
      setCredits(numValue);
      setCustomCredits(value);
    } else {
      setCustomCredits(value);
    }
  };

  const calculatePrice = (credits: number) => {
    if (credits <= 100) return credits * 0.49;
    if (credits <= 250) return credits * 0.396;
    if (credits <= 500) return credits * 0.358;
    return credits * 0.299;
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-rose-950">Purchase Credits</DialogTitle>
          <DialogDescription>
            Buy credits to use for website redesigns. No monthly commitment required.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="credits" className="text-right">
              Credits
            </Label>
            <Select
              onValueChange={(value) => {
                setCredits(parseInt(value, 10));
                setCustomCredits("");
              }}
              value={creditOptions.some((option) => option.value === credits) ? credits.toString() : "custom"}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select credits" />
              </SelectTrigger>
              <SelectContent>
                {creditOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value.toString()}>
                    {option.value} credits - ${option.price}
                  </SelectItem>
                ))}
                <SelectItem value="custom">Custom amount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {credits === parseInt(customCredits, 10) && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="custom-credits" className="text-right">
                Custom
              </Label>
              <Input
                id="custom-credits"
                type="number"
                placeholder="Enter credits"
                className="col-span-3"
                value={customCredits}
                onChange={(e) => handleCustomCredits(e.target.value)}
              />
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="total" className="text-right">
              Total
            </Label>
            <div id="total" className="col-span-3 text-2xl font-bold text-rose-600">
              ${calculatePrice(credits).toFixed(2)}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <ul className="space-y-2">
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              <span className="text-sm">Use credits anytime, they never expire</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              <span className="text-sm">1 credit = 1 website redesign</span>
            </li>
            <li className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-green-500" />
              <span className="text-sm">Bulk discounts automatically applied</span>
            </li>
          </ul>
          <Button className="w-full bg-rose-600 text-white hover:bg-rose-700">
            <CreditCard className="mr-2 h-4 w-4" />
            Purchase Credits
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Need more? <a href="#" className="text-rose-600 hover:underline">Contact sales</a> for custom plans.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}