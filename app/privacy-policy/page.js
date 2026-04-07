import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-4 pb-6 max-w-5xl mx-auto px-6">
      <div className="bg-[#edede6] rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-white">
        <h1 className="text-3xl sm:text-4xl font-light text-[#264563] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#264563]/70 mb-6">Last Updated: October 12, 2023</p>

        <div className="text-[#264563] space-y-4 text-base">
          <p>
            Welcome to Homeworld.bio ("we", "our", "us"), managed by Homeworld
            Collective Inc. We are committed to protecting and respecting your privacy.
            This Privacy Policy ("Policy") describes the types of information we may
            collect from you or that you may provide to us when you visit the
            Homeworld.bio website and our practices for collecting, using, maintaining,
            protecting, and disclosing that information.
          </p>
          <p>
            By using our site, you agree to the collection and use of information in
            accordance with this policy.
          </p>

          <h2 className="text-xl font-semibold text-[#264563] pt-4">1. What We Collect and How We Use It</h2>
          <p>
            Our core belief is that user privacy is paramount: We don't care who you are
            but just how you use our site. We monitor these analytics to continually
            improve the site and our content for a better user experience. We chose our
            service providers based on their high prioritization of user privacy:
          </p>
          <p>
            Our analytics are powered by a cookie-free, privacy-centric analytics
            platform, Plausible.io. We do not use cookies or any similar technologies that
            track you personally. Instead, we aggregate usage data to understand overall
            patterns and trends on our site. For more information, please refer to
            Plausible.io's data policy: <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">https://plausible.io/data-policy</a>
          </p>
          <p>
            Our research pages are hosted on pubpub.org, which its privacy policy here{' '}
            <a href="https://help.pubpub.org/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">https://help.pubpub.org/legal/privacy</a>
          </p>

          <h2 className="text-xl font-semibold text-[#264563] pt-4">2. Email Communication</h2>
          <p>
            Should you choose to opt-in for emails from us, we will use your email address
            for the sole purpose of providing you with the content you signed up for. We do
            not share your email information with third parties and you have the right to
            opt-out at any time.
          </p>
          <p>
            You can opt-out by clicking on the 'unsubscribe' link at the bottom of our
            emails, by directly replying to the sender or emailing hello@homeworld.bio.
            Upon opting out, your email will be deleted from our private records and will no
            longer receive email communications from us.
          </p>

          <h2 className="text-xl font-semibold text-[#264563] pt-4">3. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be
            notified to you by revising the 'Last Updated' date at the top of this policy. We
            advise you to review this policy periodically for any changes.
          </p>

          <h2 className="text-xl font-semibold text-[#264563] pt-4">4. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not
            hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
}
