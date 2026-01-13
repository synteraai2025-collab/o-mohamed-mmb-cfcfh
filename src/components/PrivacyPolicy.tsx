'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface PrivacyPolicyProps {
  className?: string;
}

interface PolicySection {
  title: string;
  content: string[];
}

const policySections: PolicySection[] = [
  {
    title: 'Information We Collect',
    content: [
      'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.',
      'This may include your name, email address, phone number, and any other information you choose to provide.',
      'We also automatically collect certain information about your device and how you interact with our services.'
    ]
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To provide, maintain, and improve our services.',
      'To process transactions and send you related information.',
      'To send you technical notices, updates, security alerts, and support messages.',
      'To communicate with you about products, services, offers, and events.',
      'To monitor and analyze trends, usage, and activities in connection with our services.'
    ]
  },
  {
    title: 'Information Sharing and Disclosure',
    content: [
      'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.',
      'We may share your information with trusted third-party service providers who assist us in operating our business.',
      'We may disclose your information when we believe disclosure is appropriate to comply with the law.'
    ]
  },
  {
    title: 'Data Security',
    content: [
      'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      'However, no method of transmission over the Internet or method of electronic storage is 100% secure.'
    ]
  },
  {
    title: 'Your Rights and Choices',
    content: [
      'You may update, correct, or delete your account information at any time by logging into your account.',
      'You may opt out of receiving promotional communications from us by following the unsubscribe instructions in those messages.',
      'You have the right to request access to the personal information we hold about you.'
    ]
  },
  {
    title: 'Children\'s Privacy',
    content: [
      'Our services are not directed to children under 13 years of age.',
      'We do not knowingly collect personal information from children under 13.',
      'If we learn that we have collected personal information from a child under 13, we will take steps to delete such information.'
    ]
  },
  {
    title: 'Changes to This Privacy Policy',
    content: [
      'We may update this Privacy Policy from time to time.',
      'We will notify you of any changes by posting the new Privacy Policy on this page.',
      'You are advised to review this Privacy Policy periodically for any changes.'
    ]
  },
  {
    title: 'Contact Us',
    content: [
      'If you have any questions about this Privacy Policy, please contact us at: privacy@example.com',
      'You may also contact us by mail at: Privacy Department, 123 Business Street, City, State 12345'
    ]
  }
];

export function PrivacyPolicy({ className }: PrivacyPolicyProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className={className}>
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-3xl md:text-4xl font-bold text-foreground">
            Privacy Policy
          </CardTitle>
          <CardDescription className="text-base md:text-lg text-muted-foreground">
            Last updated: {currentDate}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This Privacy Policy describes how we collect, use, and share your personal information when you visit or use our services. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div className="space-y-6">
            {policySections.map((section, index) => (
              <section key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-foreground border-b border-border pb-2">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Your Consent
            </h3>
            <p className="text-muted-foreground">
              By using our website and services, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PrivacyPolicy;
