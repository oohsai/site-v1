"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">Let&apos;s Work Together</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-balance">
            Ready to elevate your social media game? Schedule a call with our team to discuss your project.
          </p>
        </div>

        {/* Cal.com Embed */}
        <div className="bg-white rounded-lg overflow-hidden" style={{height: "700px"}}>
          <Cal 
            namespace="30min"
            calLink="yuvaraj-sure/30min"
            style={{width:"100%",height:"100%",overflow:"scroll"}}
            config={{"layout":"month_view"}}
          />
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-neutral-400">
            Can&apos;t find a suitable time? 
            <a href="mailto:info@contentspacestudios.social" className="text-white hover:underline ml-1">
              Email us directly
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
