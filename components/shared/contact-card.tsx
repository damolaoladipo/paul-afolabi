// components/ContactDetail.tsx

import { ConnectionCardProps, DirectContact } from "@/_data/contact";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


/**
 * A UI component for displaying single direct contact detail (Email/Phone).
 */
export function ContactDetail({ icon: Icon, title, value, href }: DirectContact) {
  return (
    <a href={href} className="group block h-full">
      <Card className="border-2 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/50 h-full">
        <CardContent className="flex items-center space-x-4 p-4 sm:p-6">
          <div className="flex-shrink-0 size-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Icon className="size-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-base font-semibold text-foreground break-all">{value}</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}


// components/ContactCard.tsx



// Assuming the data interface is imported from your data file


/**
 * A reusable UI component for the social/platform connection cards.
 * @param {ConnectionCardProps} props - The data for the card.
 */
export function ContactCard({
  icon: Icon,
  title,
  description,
  linkText,
  href,
}: ConnectionCardProps) {
  return (
    <Card className="border-0 shadow-lg transition-shadow hover:shadow-xl h-full">
      <CardContent className="space-y-4 p-6 bg-accent rounded-xl flex flex-col justify-between h-full">
        {/* Top Section: Icon and Content */}
        <div>
            {/* Icon Container */}
            <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-background/50 mb-4">
              {/* The Icon is rendered using the 'Icon' prop */}
              <Icon className="size-6 text-primary" /> 
            </div>

            {/* Content */}
            <h3 className="mb-2 text-xl font-semibold tracking-tight">
              {title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              {description}
            </p>
        </div>

        {/* Bottom Section: Link Button */}
        <div>
          <Button
            variant="link"
            className="h-auto p-0 font-medium text-primary hover:text-primary/90 group"
            asChild
          >
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
              {linkText}
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}