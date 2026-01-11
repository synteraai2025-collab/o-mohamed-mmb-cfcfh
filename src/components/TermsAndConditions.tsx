'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TermsAndConditionsProps {
  className?: string;
}

export function TermsAndConditions({ className }: TermsAndConditionsProps) {
  return (
    <div className={className}>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Terms and Conditions
          </CardTitle>
          <p className="text-center text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardHeader>
        <CardContent className="prose prose-gray dark:prose-invert max-w-none">
          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
              <p className="text-muted-foreground mb-2">
                Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-muted-foreground">
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on our website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on this website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice. However, we do not make any commitment to update the materials.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">6. Links</h2>
              <p className="text-muted-foreground">
                We have not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">7. Modifications</h2>
              <p className="text-muted-foreground">
                We may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: legal@company.com
              </p>
              <p className="text-muted-foreground">
                Address: 123 Business Street, City, State 12345
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
