import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const DISCLAIMER_KEY = "disclaimer_last_shown";
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(DISCLAIMER_KEY);
    const now = Date.now();

    if (!lastShown || now - parseInt(lastShown) >= WEEK_MS) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(DISCLAIMER_KEY, Date.now().toString());
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={24} />
            <div>
              <DialogTitle>Important Notice</DialogTitle>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 text-sm text-foreground">
          <p>
            We do not contact candidates directly. Due to the increase in scams, we only reach out to individuals who have registered through our official portal. If you receive messages claiming to be from us without registration, please ignore them.
          </p>

          <p className="pt-2 border-t">
            We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
          </p>
        </div>

        <Button onClick={handleClose} className="w-full">
          Okay
        </Button>
      </DialogContent>
    </Dialog>
  );
};
