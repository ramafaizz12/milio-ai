import Image from 'next/image';
import { Button, Title } from 'rizzui';
import { PiHouseLineBold } from 'react-icons/pi';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col px-6 py-10 xl:px-10">
      <div className="mx-auto max-w-4xl">
        <Title
          as="h1"
          className="text-2xl font-bold leading-normal text-gray-1000 lg:text-3xl"
        >
          Privacy Policy
        </Title>
        <p className="mt-4 text-sm leading-loose text-gray-500 lg:text-base">
          Last Updated: December 19, 2024
        </p>
        <div className="mt-6 space-y-6 text-gray-700 lg:text-base">
          <p>
            Welcome to <strong>MilioBot AI</strong> by PT AERO NUSANTARA
            TEKNOLOGI at miliobot.com! Your privacy is very important to us.
            This Privacy Policy explains how we collect, use, disclose, and
            protect your personal data. By using MilioBot AI, you agree to the
            collection and use of information in accordance with this policy.
          </p>
          <hr className="border-gray-300" />
          <section>
            <h2 className="font-bold">1. Introduction</h2>
            <p>
              MilioBot AI provides chatbot solutions for businesses to be used
              as customer service tools. This policy outlines how MilioBot AI
              processes data from businesses (our clients) and their customers.
              We ensure compliance with all applicable privacy laws and data
              protection regulations. If you have any questions, contact us at{' '}
              <a
                href="mailto:miliochatbotai@gmail.com"
                className="text-blue-600"
              >
                miliochatbotai@gmail.com
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="font-bold">2. Definitions</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Client:</strong> A business entity using MilioBot AI
                services to communicate with their customers.
              </li>
              <li>
                <strong>Customer:</strong> An individual interacting with the
                chatbot or agents of our Clients.
              </li>
              <li>
                <strong>Personal Data:</strong> Any information related to an
                identifiable individual.
              </li>
              <li>
                <strong>Platform Data:</strong> Data collected via platforms
                like Meta, including WhatsApp Business API.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold">3. Data We Collect</h2>
            <strong> From Our Clients</strong>
            <ul className="list-disc space-y-2 pl-6">
              <li>Business Name, Logo, and Address.</li>
              <li>Email Address.</li>
              <li>Subscription Details.</li>
              <li>
                Bot Configuration Metadata (e.g., responses, goals, settings).
              </li>
            </ul>
            <strong>From Customers (on behalf of Clients)</strong>
            <ul className="list-disc space-y-2 pl-6">
              <li>Customer phone numbers (via WhatsApp or other channels).</li>
              <li>Message content and conversation history.</li>
              <li>Metadata such as timestamps and delivery/read status.</li>
            </ul>
            <strong>Automatically Collected Data</strong>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Cookies:</strong> To improve user experience and track
                analytics.
              </li>
              <li>
                <strong>Device Information:</strong> : Includes IP addresses,
                browser types, operating systems, and usage statistics.
              </li>
              <li>
                <strong>Platform Data:</strong>Data from WhatsApp Business API,
                including delivery statuses and shared media files.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold">4. How We Use Data</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                To provide and improve chatbot services and human handover for
                Clients
              </li>
              <li>
                Facilitate communication between Clients and their customers
              </li>
              <li>Ensure compliance with WhatsApp and Meta guidelines</li>
              <li>Analyze usage patterns for better user experience</li>
              <li>Manage Client subscriptions, payments, and billing</li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold">5. Sharing and Disclosure of Data</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Share customer messages and metadata with the relevant Client.
              </li>
              <li>
                Share data with platforms like Meta (e.g., WhatsApp Business
                API) and payment gateways (e.g., Midtrans).
              </li>
              <li>
                Disclose data as required by law or to protect rights and
                property.
              </li>
            </ul>
          </section>
          <section>
            <h2 className="font-bold">
              6. Handling Data Requests by Public Authorities
            </h2>
            <p>
              We are committed to protecting users’ personal data in accordance
              with applicable laws and regulations. In cases of data requests by
              public authorities, we adhere to the following principles:
            </p>
            <ol className="list-decimal space-y-4 pl-6">
              <li>
                <strong>Review of Data Request Legality:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    All data requests from public authorities are reviewed for
                    legality before we respond.
                  </li>
                  <li>
                    We only process requests required by applicable laws and
                    international data regulations.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Data Minimization:</strong>
                <ul className="list-disc pl-6">
                  <li>
                    We limit the information shared to what is strictly
                    necessary to fulfill lawful requests.
                  </li>
                  <li>
                    No additional data irrelevant to the request will be shared.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Documentation of Data Requests:</strong>
                <ul className="list-disc pl-6">
                  <li>We document all data requests, including:</li>
                  <ul className="list-circle pl-6">
                    <li>Identity of the requesting authority.</li>
                    <li>Legal basis for the request.</li>
                    <li>Data provided.</li>
                    <li>Time and method of response.</li>
                  </ul>
                </ul>
              </li>
            </ol>
          </section>
          <section>
            <h2 className="font-bold">7. Data Retention</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Chat History: Retained for up to 24 months or as configured by
                the Client.
              </li>
              <li>
                Client Data: Retained until the Client terminates their
                subscription.
              </li>
              <li>
                Analytics Data: Stored in anonymized form for future
                improvements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">8. Data Security</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Encryption: All data in transit and at rest is encrypted using
                industry-standard protocols.
              </li>
              <li>
                Access Control: Access is restricted to authorized personnel
                only.
              </li>
              <li>
                Regular Audits: Conducted to ensure compliance with data
                protection policies.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">9. User Rights</h2>
            <h3 className="mt-4 font-semibold">For Clients</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Access and download their business data from the dashboard.
              </li>
              <li>Request account deletion and related data at any time.</li>
              <li>Update chatbot configurations and bot data.</li>
            </ul>
            <h3 className="mt-4 font-semibold">For Customers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Request a copy of their conversation history.</li>
              <li>Request deletion of their data from the Client's system.</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{' '}
              <a
                href="mailto:miliochatbotai@gmail.com"
                className="text-blue-600"
              >
                miliochatbotai@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-bold">10. Cookies Policy</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Enhance user experience.</li>
              <li>Track traffic and usage patterns.</li>
              <li>
                You can control or disable cookies through your browser
                settings. However, disabling cookies may affect certain
                functionalities.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">11. Children's Privacy</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Our services are not intended for individuals under the age of
                13.
              </li>
              <li>
                We do not knowingly collect personal data from children under
                13. If you believe a child has provided personal data to us,
                please contact us immediately.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">
              12. Compliance with Meta Platform Terms
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Data Use: Data collected through WhatsApp Business is used
                solely to facilitate Client-customer interactions.
              </li>
              <li>
                No Unauthorized Use: Data from Meta is not shared or sold to any
                third party.
              </li>
              <li>
                Secure Communication: All data exchanges with Meta are encrypted
                and secure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">13. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be notified via email or posted on our website. You are
              responsible for periodically reviewing this policy.
            </p>
          </section>
          {/* Add other sections here as per the document */}
          <section>
            <h2 className="font-bold">14. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <ul className="list-none pl-0">
              <li>
                Email:{' '}
                <a
                  href="mailto:miliochatbotai@gmail.com"
                  className="text-blue-600"
                >
                  miliochatbotai@gmail.com
                </a>
              </li>
              <li>WhatsApp: +62 822-5036-811</li>
              <li>
                Address: PT AERO NUSANTARA TEKNOLOGI, Gowa, South Sulawesi,
                Indonesia
              </li>
            </ul>
          </section>
        </div>
        <Link href={'/'}>
          <Button
            size="xl"
            as="span"
            className="mt-8 h-12 px-4 xl:h-14 xl:px-6"
          >
            <PiHouseLineBold className="mr-1.5 text-lg" />
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}
