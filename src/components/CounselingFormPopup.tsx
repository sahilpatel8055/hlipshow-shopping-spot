import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

interface CounselingFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: string; // 'auto', 'cta', 'bell'
}

const CounselingFormPopup: React.FC<CounselingFormPopupProps> = ({ isOpen, onClose, trigger = 'cta' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    course: '',
    consent: true // Default to true as requested
  });

  const courses = [
    'Online MBA',
    'Online MCA',
    'Online BBA',
    'Online BCA',
    'Online BCom',
    'Online MCom',
    'Online BA',
    'Online MA'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Set session storage to remember form submission
    sessionStorage.setItem('counselingFormSubmitted', 'true');
    sessionStorage.setItem('counselingFormSubmittedTime', Date.now().toString());

    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-md mx-auto p-4 gap-0 bg-card/95 backdrop-blur-md border-border rounded-2xl shadow-lg min-h-[440px] md:min-h-[387px] lg:min-h-[423px]">
        <DialogTitle className="sr-only">Counseling Form</DialogTitle>
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-destructive hover:text-destructive-foreground z-50"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center mb-3">
            <h3 className="text-sm font-bold text-foreground mb-1">
              Join <span className="text-primary">50,000+</span> Learners Across India
            </h3>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-2 h-2 text-primary" />
                </div>
                Easy financing
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <div className="w-4 h-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <Users className="w-2 h-2 text-primary" />
                </div>
                Scholarships
              </div>
            </div>
            <p className="text-xs text-card-foreground font-medium mb-1">
              Submit your details and we'll contact you soon!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-foreground w-12 flex-shrink-0">NAME :</label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background border border-black-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-xs h-8 flex-1"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-foreground w-12 flex-shrink-0">EMAIL :</label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background border border-black-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-xs h-8 flex-1"
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-foreground whitespace-nowrap min-w-fit">Mobile No. :</label>
              <div className="flex flex-1">
                <div className="flex items-center bg-background border border-r-0 border-gray-200 rounded-l-md px-2 h-8">
                  <span className="text-xs text-muted-foreground">+91</span>
                </div>
                <Input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="bg-background border border-black-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent rounded-l-none text-xs h-8"
                  required
                />
              </div>
            </div>

            <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
              <SelectTrigger className="bg-background border border-black-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-xs h-8">
                <SelectValue placeholder="Select course*" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-black-300 shadow-lg z-50">
                {courses.map((course) => (
                  <SelectItem key={course} value={course} className="text-xs">
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex items-start space-x-2 mt-1">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                className="mt-0.5 flex-shrink-0"
              />
              <label htmlFor="consent" className="text-xs text-muted-foreground leading-tight">
                I authorize Online Manipal and its associates to contact me with updates notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-xs h-8 mt-1"
              disabled={!formData.consent}
            >
              Enroll Now
            </Button>
          </form>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              Last Date: <span className="text-primary font-medium">23 Aug</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" />
              <span className="text-primary font-medium">Limited Seats</span>
            </div>
          </div>
      </DialogContent>
    </Dialog>
  );
};

export default CounselingFormPopup;
