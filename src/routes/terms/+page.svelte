<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { siteConfig } from '$lib/config/site';
</script>

<svelte:head>
	<title>Terms of Use - {siteConfig.siteName}</title>
	<meta name="description" content="Terms of Use for {siteConfig.siteName} platform and services." />
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="max-w-4xl mx-auto">
		<div class="text-center mb-12">
			<h1 class="text-4xl font-bold mb-4">Terms of Use</h1>
			<p class="text-lg text-muted-foreground">
				Last updated: {siteConfig.company.founded}
			</p>
		</div>

		<Card>
			<CardContent class="p-8">
				<div class="prose prose-neutral max-w-none">
					<h2 class="text-2xl font-semibold mb-4">1. Business Entity Information</h2>
					<p class="mb-6">
						We are currently operating as an individual founder entity with plans to establish a PT (Indonesian Limited Liability Company) 
						as business growth requires. Our current documentation includes:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li>Founder credentials and technical background</li>
						<li>Product development specifications and roadmap</li>
						<li>Commitment to Indonesian regulatory compliance including UU ITE, UU PDP, and Bank Indonesia regulations</li>
					</ul>
					<p class="mb-6">
						We're open to flexible partnership arrangements and can provide founder background information. 
						We're prepared to formalize business structure as partnerships and revenue scale warrant it.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
					<p class="mb-6">
						By accessing and using {siteConfig.siteName}'s services, you accept and agree to be bound by these 
						terms and provisions. If you do not agree to abide by the above, please do not use this service.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">2. Use License</h2>
					<p class="mb-4">
						Permission is granted to temporarily download one copy of the materials on {siteConfig.siteName}'s 
						website for personal, non-commercial transitory viewing only. This is the grant of a 
						license, not a transfer of title, and under this license you may not:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li>modify or copy the materials;</li>
						<li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
						<li>attempt to decompile or reverse engineer any software contained on {siteConfig.siteName}'s website;</li>
						<li>remove any copyright or other proprietary notations from the materials.</li>
					</ul>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">3. Disclaimer</h2>
					<p class="mb-6">
						The materials on {siteConfig.siteName}'s website are provided on an 'as is' basis. {siteConfig.siteName} makes 
						no warranties, expressed or implied, and hereby disclaims and negates all other 
						warranties including without limitation, implied warranties or conditions of 
						merchantability, fitness for a particular purpose, or non-infringement of intellectual 
						property or other violation of rights.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">4. Limitations</h2>
					<p class="mb-6">
						In no event shall {siteConfig.siteName} or its suppliers be liable for any damages (including, 
						without limitation, damages for loss of data or profit, or due to business interruption) 
						arising out of the use or inability to use the materials on {siteConfig.siteName}'s website, even if 
						{siteConfig.siteName} or a {siteConfig.siteName} authorized representative has been notified orally or in writing 
						of the possibility of such damage. Because some jurisdictions do not allow limitations 
						on implied warranties, or limitations of liability for consequential or incidental 
						damages, these limitations may not apply to you.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
					<p class="mb-6">
						The materials appearing on {siteConfig.siteName}'s website could include technical, typographical, 
						or photographic errors. {siteConfig.siteName} does not warrant that any of the materials on its 
						website are accurate, complete, or current. {siteConfig.siteName} may make changes to the materials 
						contained on its website at any time without notice. However, {siteConfig.siteName} does not make 
						any commitment to update the materials.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">6. Links</h2>
					<p class="mb-6">
						{siteConfig.siteName} has not reviewed all of the sites linked to our website and is not responsible 
						for the contents of any such linked site. The inclusion of any link does not imply 
						endorsement by {siteConfig.siteName} of the site. Use of any such linked website is at the user's 
						own risk.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">7. Indonesian Legal Compliance</h2>
					<p class="mb-6">
						We include standard legal disclaimers required under Indonesian law:
					</p>
					<ul class="list-disc list-inside mb-6 space-y-2">
						<li>UU ITE compliance disclaimers - system reliability and security responsibilities</li>
						<li>Limitation of liability clauses - within legal bounds permitted by Indonesian consumer protection law</li>
						<li>Data protection notices - user data handling and privacy rights</li>
						<li>Service availability disclaimers - uptime commitments and maintenance windows</li>
					</ul>
					<p class="mb-6">
						We're open to additional disclaimers as partnership requirements dictate.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">8. Modifications</h2>
					<p class="mb-6">
						{siteConfig.siteName} may revise these terms of service at any time with notice. 
						By continuing to use this website, you are agreeing to be bound by the updated version of 
						these terms of service.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">9. Governing Law</h2>
					<p class="mb-6">
						These terms and conditions are governed by and construed in accordance with Indonesian law. 
						Any disputes shall be resolved under Indonesian jurisdiction in {siteConfig.company.location}.
					</p>

					<Separator class="my-6" />

					<h2 class="text-2xl font-semibold mb-4">10. Contact Information</h2>
					<p class="mb-6">
						If you have any questions about these Terms of Use, please contact us at:
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