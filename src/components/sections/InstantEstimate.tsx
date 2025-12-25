'use client';

import { Calculator } from 'lucide-react';

export function InstantEstimate() {
  return (
    <section className="section bg-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-semibold">Instant Estimate</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get Your Roof Estimate in Minutes
          </h2>
          <p className="text-gray text-lg">
            Use our instant estimate tool to get a ballpark price for your roofing project.
            No commitment required.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <iframe
            src="https://journeys.demand-iq.com/631cdf2c-ff57-11ef-b232-0a58a9feac02?journeyId=40ddea4c-3884-48bb-9acb-1fcbf409bc60"
            width="100%"
            height="700"
            frameBorder="0"
            title="Instant Roof Estimate Calculator"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
