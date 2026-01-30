import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Wind, Thermometer, DollarSign, CheckCircle, AlertTriangle, Home } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Attic Ventilation & Roof Energy Efficiency | Charlotte NC | Best Roofing Now',
  description: 'Improve your home\'s energy efficiency with proper attic ventilation. Ridge vents, soffit vents, and ventilation solutions for Charlotte homes.',
  keywords: [
    'attic ventilation Charlotte',
    'roof ventilation',
    'ridge vent installation',
    'soffit vents',
    'energy efficient roofing',
    'cool roof Charlotte',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ventilation`,
  },
  openGraph: {
    title: 'Attic Ventilation & Energy Efficiency | Best Roofing Now',
    description: 'Proper ventilation solutions for Charlotte homes.',
    url: `${SITE_CONFIG.url}/ventilation`,
    type: 'website',
  },
};

const ventilationTypes = [
  {
    name: 'Ridge Vents',
    description: 'Continuous vents installed along the roof peak for maximum exhaust airflow.',
    pros: ['Uniform ventilation', 'Low profile appearance', 'No moving parts'],
  },
  {
    name: 'Soffit Vents',
    description: 'Intake vents installed under the roof eaves to draw in fresh air.',
    pros: ['Essential for intake', 'Hidden from view', 'Weather protected'],
  },
  {
    name: 'Box Vents',
    description: 'Static vents installed near the ridge for exhaust ventilation.',
    pros: ['Simple installation', 'No electricity needed', 'Affordable option'],
  },
  {
    name: 'Power Ventilators',
    description: 'Electric or solar-powered fans for active ventilation.',
    pros: ['Maximum airflow', 'Thermostat controlled', 'Solar options available'],
  },
];

export default function VentilationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16 md:py-20">
        <div className="container">
          <Breadcrumbs
            items={[{ label: 'Ventilation & Energy Efficiency' }]}
            className="mb-6 text-white/80"
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Wind className="w-10 h-10" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Attic Ventilation & Energy Efficiency
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Proper attic ventilation is critical for roof longevity and home comfort.
              Poor ventilation can void warranties, increase energy costs, and cause
              premature roof failure.
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-accent hover:bg-accent-dark text-white"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Get Ventilation Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Why Ventilation Matters */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Why Proper Ventilation Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="w-8 h-8 text-red-500" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-3">Summer Heat</h3>
              <p className="text-gray text-sm">
                Without proper ventilation, attic temperatures can exceed 150°F,
                causing shingles to deteriorate prematurely and increasing
                cooling costs by 10-25%.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wind className="w-8 h-8 text-blue-500" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-3">Winter Moisture</h3>
              <p className="text-gray text-sm">
                Warm, moist air from living spaces rises into the attic. Without
                ventilation, this moisture condenses, causing mold, rot, and
                ice dam formation.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-500" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-3">Energy Savings</h3>
              <p className="text-gray text-sm">
                Proper ventilation reduces the load on your HVAC system,
                lowering energy bills year-round and extending equipment
                lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventilation Types */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Ventilation Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ventilationTypes.map((type, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{type.name}</h3>
                <p className="text-gray mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.pros.map((pro, proIdx) => (
                    <li key={proIdx} className="flex items-center gap-2 text-sm text-dark">
                      <CheckCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of Poor Ventilation */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Signs of Poor Attic Ventilation
            </h2>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-yellow-800 mb-3">Watch for these warning signs:</h3>
                  <ul className="space-y-2 text-yellow-800">
                    <li>• Ice dams forming along roof edges in winter</li>
                    <li>• Excessive heat in upper floors during summer</li>
                    <li>• Mold or mildew in the attic</li>
                    <li>• Peeling exterior paint near roofline</li>
                    <li>• Warped or damaged roof decking</li>
                    <li>• High energy bills despite adequate insulation</li>
                    <li>• Shingles curling or deteriorating prematurely</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray text-center">
              If you notice any of these signs, contact us for a free ventilation assessment.
              We&apos;ll evaluate your current system and recommend improvements.
            </p>
          </div>
        </div>
      </section>

      {/* Balanced Ventilation */}
      <section className="section bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              The Key: Balanced Ventilation
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-6">
                <Home className="w-12 h-12 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Intake + Exhaust = Airflow</h3>
                  <p className="text-gray">Proper ventilation requires both intake and exhaust vents working together</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-light rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-2">Intake (Soffit Vents)</h4>
                  <p className="text-gray text-sm">
                    Fresh air enters through soffit vents under the eaves,
                    drawing cooler outside air into the attic space.
                  </p>
                </div>
                <div className="bg-light rounded-lg p-4">
                  <h4 className="font-bold text-primary mb-2">Exhaust (Ridge/Roof Vents)</h4>
                  <p className="text-gray text-sm">
                    Hot, moist air escapes through ridge vents or roof vents
                    at the peak, creating continuous airflow.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-dark text-sm">
                  <strong>Industry Standard:</strong> The 1:150 rule recommends 1 square foot
                  of ventilation for every 150 square feet of attic floor space, split evenly
                  between intake and exhaust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Efficiency Tips */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Additional Energy Efficiency Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="font-bold text-primary text-lg mb-3">Cool Roof Shingles</h3>
              <p className="text-gray text-sm">
                Reflective shingles that reduce heat absorption by up to 40%,
                significantly lowering cooling costs in Charlotte&apos;s hot summers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="font-bold text-primary text-lg mb-3">Radiant Barriers</h3>
              <p className="text-gray text-sm">
                Reflective material installed in the attic that blocks up to 97%
                of radiant heat transfer from the roof.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="font-bold text-primary text-lg mb-3">Attic Insulation</h3>
              <p className="text-gray text-sm">
                Proper insulation works with ventilation to maintain comfortable
                temperatures year-round and reduce energy costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Is Your Attic Properly Ventilated?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free ventilation assessment with any roof inspection. We&apos;ll
            evaluate your current system and recommend improvements to protect
            your roof and reduce energy costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneClean}`}
              className="btn bg-white text-accent hover:bg-light text-lg px-8"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-accent hover:bg-accent-dark text-white text-lg px-8"
            >
              Schedule Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
