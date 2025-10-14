import { DIRECT_CONTACT_INFO } from "@/_data/contact";
import { ContactDetail } from "@/components/shared/contact-card";

export default function Contact() {
  return (
    <>
      <div className=" max-w-5xl mx-auto px-6 py-16">

        <div className="container mx-auto  py-12">

          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr,2fr]">
            
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Let&apos;s connect
              </h2>
              <p className="text-muted-foreground">
                We&apos;re here to help and answer any question you might have,
                <br />
                We look forward to hearing from you.
              </p>
            </div>


  
        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          {DIRECT_CONTACT_INFO.map((contact) => (
            <ContactDetail 
              key={contact.title}
              {...contact} 
            />
          ))}
        </div>

             {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CONNECTION_CARDS.map((card) => (
            <ContactCard 
              key={card.id}
              {...card} 
            />
          ))}
        </div> */}

          </div>
        
        </div>
      </div>
    </>
  );
}
