<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
	<title>Privacy Policy - {siteConfig.siteName}</title>
	<meta name="description" content="Privacy Policy for {siteConfig.siteName} platform and services." />
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">Privacy Policy</h1>
			<p class="text-lg text-muted-foreground">
				Last updated: {siteConfig.company.founded}
			</p>
		</div>

		<Card>
			<CardContent class="p-8">
				<div class="prose prose-neutral max-w-none">
					<h2 class="text-2xl font-semibold mb-4">1. Indonesian Privacy Framework</h2>
					<p class="mb-6">
						We are committed to implementing comprehensive privacy protection aligned with Indonesian regulations. 
						Our privacy framework includes:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li>UU PDP (Personal Data Protection Law) compliance - data minimization, user consent, and data subject rights</li>
						<li>UU ITE compliance - secure electronic system operations and data protection</li>
						<li>Transparent data handling - clear disclosure of data collection, processing, and storage practices</li>
						<li>User control mechanisms - access, correction, and deletion rights for personal data</li>
					</ul>
					<p class="mb-6">
						We're prepared to adapt our privacy practices to meet specific partnership requirements and can work 
						with your legal team to ensure mutual compliance standards.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">2. Data We Collect</h2>
					<p class="mb-4">
						Yes, we collect user data necessary for service operation:
					</p>
					
					<h3 class="text-xl font-semibold mb-3">Essential Data</h3>
					<ul class="list-disc list-inside mb-4 space-y-1">
						<li>Account information - email, username, password (encrypted)</li>
						<li>Profile data - name, company details for dashboard personalization</li>
						<li>Usage analytics - feature usage, performance metrics for service improvement</li>
						<li>Transaction data - payment history, subscription details, voucher purchases</li>
					</ul>

					<h3 class="text-xl font-semibold mb-3">Technical Data</h3>
					<ul class="list-disc list-inside mb-6 space-y-1">
						<li>Device information - browser type, IP address for security and functionality</li>
						<li>Activity logs - login times, API usage for monitoring and troubleshooting</li>
						<li>Performance data - system response times, error logs for optimization</li>
					</ul>

					<p class="mb-6">
						All data collection follows Indonesian UU PDP requirements with:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li>User consent for data processing</li>
						<li>Data minimization principles</li>
						<li>Clear purpose limitation</li>
						<li>User rights to access, modify, and delete data</li>
						<li>Secure storage with encryption</li>
					</ul>

					<h3 class="text-xl font-semibold mb-3">Usage Information</h3>
					<ul class="list-disc list-inside mb-6 space-y-1">
						<li>How you use our platform and services</li>
						<li>Device information and browser type</li>
						<li>IP address and location data</li>
						<li>Cookies and similar tracking technologies</li>
					</ul>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
					<p class="mb-4">
						We use the information we collect to:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li>Provide, maintain, and improve our services</li>
						<li>Process transactions and send related information</li>
						<li>Send you technical notices and support messages</li>
						<li>Communicate with you about products, services, and promotional offers</li>
						<li>Monitor and analyze trends, usage, and activities</li>
						<li>Detect, investigate, and prevent fraudulent activities</li>
						<li>Comply with legal obligations</li>
					</ul>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">3. Information Sharing</h2>
					<p class="mb-4">
						We may share your information in the following situations:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li><strong>With your consent:</strong> We may share your information with third parties when you give us explicit consent</li>
						<li><strong>Service providers:</strong> We may share information with third-party service providers who help us operate our platform</li>
						<li><strong>Legal requirements:</strong> We may disclose information if required by law or to protect our rights</li>
						<li><strong>Business transfers:</strong> Information may be transferred in connection with mergers or acquisitions</li>
					</ul>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">4. Data Security</h2>
					<p class="mb-6">
						We implement appropriate security measures to protect your personal information against 
						unauthorized access, alteration, disclosure, or destruction. However, no method of 
						transmission over the internet or electronic storage is 100% secure, and we cannot 
						guarantee absolute security.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">5. Your Rights</h2>
					<p class="mb-4">
						Depending on your location, you may have the following rights regarding your personal information:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li><strong>Access:</strong> Request access to your personal information</li>
						<li><strong>Correction:</strong> Request correction of inaccurate information</li>
						<li><strong>Deletion:</strong> Request deletion of your personal information</li>
						<li><strong>Portability:</strong> Request transfer of your information to another service</li>
						<li><strong>Objection:</strong> Object to processing of your personal information</li>
						<li><strong>Withdrawal:</strong> Withdraw consent for processing</li>
					</ul>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
					<p class="mb-4">
						We use cookies and similar tracking technologies to:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li>Remember your preferences and settings</li>
						<li>Analyze site traffic and usage patterns</li>
						<li>Provide personalized content and advertisements</li>
						<li>Improve our services and user experience</li>
					</ul>
					<p class="mb-6">
						You can control cookie settings through your browser preferences. However, disabling 
						cookies may limit your ability to use certain features of our platform.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">7. Data Retention</h2>
					<p class="mb-6">
						We retain your personal information for as long as necessary to provide our services 
						and fulfill the purposes outlined in this privacy policy. We may also retain information 
						to comply with legal obligations, resolve disputes, and enforce our agreements.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
					<p class="mb-6">
						Your information may be transferred to and processed in countries other than your own. 
						We ensure appropriate safeguards are in place to protect your information in accordance 
						with applicable data protection laws.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
					<p class="mb-6">
						We may update this privacy policy from time to time. We will notify you of any material 
						changes by posting the new privacy policy on our website and updating the "Last updated" 
						date.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">10. Contact Us</h2>
					<p class="mb-6">
						If you have any questions about this Privacy Policy, please contact us at:
					</p>
					<div class="bg-muted/50 p-4 rounded-lg border">
						<p><strong>{siteConfig.siteName}</strong></p>
						<p>Email: <a href="mailto:{siteConfig.company.email}" class="text-primary hover:underline">{siteConfig.company.email}</a></p>
						<p>WhatsApp: <a href="https://wa.me/{siteConfig.company.phone.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">{siteConfig.company.phone}</a></p>
						<p>Address: {siteConfig.company.address}</p>
						<p>Founder: {siteConfig.founder.name}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</div>