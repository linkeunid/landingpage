<script lang="ts">
	import { Alert, AlertDescription, AlertTitle } from '$lib/components/ui/alert';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { siteConfig } from '$lib/config/site';
	import { AlertTriangle, Mail, MapPin, Phone, Share2 } from '@lucide/svelte';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { onMount } from 'svelte';

	// Props from page.server.ts
	let { form: actionData }: { form: ActionData } = $props();

	// Reactive state
	let isSubmitting = $state(false);
	
	// Form field values
	let firstName = $state(actionData?.data?.firstName ?? '');
	let lastName = $state(actionData?.data?.lastName ?? '');
	let email = $state(actionData?.data?.email ?? '');
	let subject = $state(actionData?.data?.subject ?? '');
	let message = $state(actionData?.data?.message ?? '');

	// Check if form is valid (all required fields filled)
	let isFormValid = $derived(
		firstName.trim().length > 0 &&
		lastName.trim().length > 0 &&
		email.trim().length > 0 &&
		subject.trim().length > 0 &&
		message.trim().length > 0
	);

	// Show toast notifications based on form result
	onMount(() => {
		if (actionData?.success) {
			toast.success(actionData.message || 'Thank you for your message! Please note: This is currently a placeholder form - the actual email delivery is not yet implemented.');
		} else if (actionData?.fieldErrors?.general) {
			toast.error(actionData.fieldErrors.general[0]);
		}
	});

	// Handle form submission
	function handleSubmit() {
		return ({ result, update }: any) => {
			isSubmitting = false;
			if (result.type === 'success') {
				toast.success(result.data?.message || 'Thank you for your message! Please note: This is currently a placeholder form - the actual email delivery is not yet implemented.');
				// Reset form fields on success
				firstName = '';
				lastName = '';
				email = '';
				subject = '';
				message = '';
			} else if (result.type === 'failure') {
				if (result.data?.fieldErrors?.general) {
					toast.error(result.data.fieldErrors.general[0]);
				} else {
					toast.error('Please fix the errors and try again.');
				}
			}
			update();
		};
	}
</script>

<svelte:head>
	<title>Contact Us - {siteConfig.siteName}</title>
	<meta name="description" content="Get in touch with {siteConfig.siteName}. We're here to help you with your software development and digital solution needs." />
</svelte:head>

<section class="zen-spacing">
	<div class="zen-section text-center">
		<div class="mb-12">
			<Badge class="mb-8 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-light">
				Get in Touch
			</Badge>
		</div>
		<h1 class="text-3xl md:text-5xl mb-8 zen-text max-w-2xl mx-auto">
			Contact <span class="text-primary">Us</span>
		</h1>
		<p class="text-lg text-muted-foreground mb-16 max-w-xl mx-auto zen-text">
			Ready to optimize your work with our all-in-one platform? Let's discuss how we can help.
		</p>
	</div>
</section>

<section class="zen-spacing">
	<div class="zen-section">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
			<div>
				<h2 class="text-2xl mb-8">Let's Connect</h2>
				<p class="text-muted-foreground mb-12 zen-text">
					Have questions about our SaaS platform? Want to partner with us for business opportunities? We're here to help you grow.
				</p>
				
				<div class="space-y-8">
					<Card class="zen-card p-6">
						<CardContent class="p-0">
							<div class="flex items-center space-x-4">
								<div class="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
									<Mail class="w-5 h-5 text-primary" />
								</div>
								<div>
									<h3 class="font-light mb-1">Email</h3>
									<a href="mailto:{siteConfig.company.email}" class="text-sm text-muted-foreground hover:text-foreground transition-colors">{siteConfig.company.email}</a>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card class="zen-card p-6">
						<CardContent class="p-0">
							<div class="flex items-center space-x-4">
								<div class="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
									<Phone class="w-5 h-5 text-primary" />
								</div>
								<div>
									<h3 class="font-light mb-1">WhatsApp</h3>
									<a href="https://wa.me/{siteConfig.company.phone.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
										{siteConfig.company.phone}
									</a>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card class="zen-card p-6">
						<CardContent class="p-0">
							<div class="flex items-center space-x-4">
								<div class="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
									<MapPin class="w-5 h-5 text-primary" />
								</div>
								<div>
									<h3 class="font-light mb-1">Address</h3>
									<p class="text-sm text-muted-foreground">
										{siteConfig.company.address}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card class="zen-card p-6">
						<CardContent class="p-0">
							<div class="flex items-center space-x-4">
								<div class="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
									<Share2 class="w-5 h-5 text-primary" />
								</div>
								<div>
									<h3 class="font-light mb-1">Social Media</h3>
									<div class="text-sm text-muted-foreground">
										<p>Instagram: @linkeunid</p>
										<p>Threads: @linkeunid</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<div>
				<Card class="zen-card p-8">
					<CardHeader class="p-0 mb-8">
						<CardTitle class="text-xl font-light">Send us a message</CardTitle>
					</CardHeader>
					<CardContent class="p-0">
						<!-- Alert for non-functional form -->
						<Alert class="mb-6" variant="destructive">
							<AlertTriangle class="h-4 w-4" />
							<AlertTitle>Form Currently Unavailable</AlertTitle>
							<AlertDescription>
								<p>
									This contact form is not working right now. Please reach out to us directly via email at 
									<a href="mailto:{siteConfig.company.email}" class="font-medium underline hover:no-underline">
										{siteConfig.company.email}
									</a> 
									or WhatsApp at 
									<a href="https://wa.me/{siteConfig.company.phone.replace(/\D/g, '')}" target="_blank" rel="noopener noreferrer" class="font-medium underline hover:no-underline">
										{siteConfig.company.phone}
									</a>.
								</p>
							</AlertDescription>
						</Alert>
						
						<form 
							method="POST" 
							use:enhance={() => {
								isSubmitting = true;
								return handleSubmit();
							}}
							class="space-y-6"
						>
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div class="space-y-2">
									<Label for="firstName">First Name</Label>
									<Input 
										id="firstName" 
										name="firstName" 
										bind:value={firstName}
										placeholder="John"
										disabled={isSubmitting}
										required
										class={actionData?.fieldErrors && 'firstName' in actionData.fieldErrors ? 'border-red-500' : ''}
									/>
									{#if actionData?.fieldErrors && 'firstName' in actionData.fieldErrors}
										<p class="text-red-500 text-xs mt-1">{actionData.fieldErrors.firstName[0]}</p>
									{/if}
								</div>
								
								<div class="space-y-2">
									<Label for="lastName">Last Name</Label>
									<Input 
										id="lastName" 
										name="lastName" 
										bind:value={lastName}
										placeholder="Doe"
										disabled={isSubmitting}
										required
										class={actionData?.fieldErrors && 'lastName' in actionData.fieldErrors ? 'border-red-500' : ''}
									/>
									{#if actionData?.fieldErrors && 'lastName' in actionData.fieldErrors}
										<p class="text-red-500 text-xs mt-1">{actionData.fieldErrors.lastName[0]}</p>
									{/if}
								</div>
							</div>

							<div class="space-y-2">
								<Label for="email">Email</Label>
								<Input 
									type="email" 
									id="email" 
									name="email" 
									bind:value={email}
									placeholder="john@example.com"
									disabled={isSubmitting}
									required
									class={actionData?.fieldErrors && 'email' in actionData.fieldErrors ? 'border-red-500' : ''}
								/>
								{#if actionData?.fieldErrors && 'email' in actionData.fieldErrors}
									<p class="text-red-500 text-xs mt-1">{actionData.fieldErrors.email[0]}</p>
								{/if}
							</div>

							<div class="space-y-2">
								<Label for="subject">Subject</Label>
								<Input 
									id="subject" 
									name="subject" 
									bind:value={subject}
									placeholder="How can we help you?"
									disabled={isSubmitting}
									required
									class={actionData?.fieldErrors && 'subject' in actionData.fieldErrors ? 'border-red-500' : ''}
								/>
								{#if actionData?.fieldErrors && 'subject' in actionData.fieldErrors}
									<p class="text-red-500 text-xs mt-1">{actionData.fieldErrors.subject[0]}</p>
								{/if}
							</div>

							<div class="space-y-2">
								<Label for="message">Message</Label>
								<Textarea 
									id="message" 
									name="message" 
									rows={4}
									bind:value={message}
									placeholder="Tell us more about your inquiry..."
									disabled={isSubmitting}
									required
									class={actionData?.fieldErrors && 'message' in actionData.fieldErrors ? 'border-red-500' : ''}
								/>
								{#if actionData?.fieldErrors && 'message' in actionData.fieldErrors}
									<p class="text-red-500 text-xs mt-1">{actionData.fieldErrors.message[0]}</p>
								{/if}
							</div>

							<Button type="submit" size="lg" class="zen-button w-full" disabled={isSubmitting || !isFormValid}>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
</section>

<section class="zen-spacing bg-muted/30">
	<div class="zen-section text-center">
		<div class="mb-20">
			<h2 class="text-2xl mb-4">Frequently Asked Questions</h2>
			<p class="text-muted-foreground zen-text max-w-md mx-auto">
				Quick answers to common questions
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
			<Card class="zen-card p-8 text-left">
				<CardHeader class="pb-6">
					<CardTitle class="text-lg font-light">What is {siteConfig.siteName}?</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground zen-text">
						{siteConfig.siteName} is an all-in-one SaaS platform providing developer tools, shortlink management, and digital solutions. We help businesses and developers optimize their work with single-factor authentication.
					</p>
				</CardContent>
			</Card>

			<Card class="zen-card p-8 text-left">
				<CardHeader class="pb-6">
					<CardTitle class="text-lg font-light">What services do you offer?</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground zen-text">
						We offer software development services, SaaS platform solutions, web development, mobile development, and a comprehensive suite of digital tools and utilities.
					</p>
				</CardContent>
			</Card>

			<Card class="zen-card p-8 text-left">
				<CardHeader class="pb-6">
					<CardTitle class="text-lg font-light">Which countries do you serve?</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground zen-text">
						We currently serve clients in {siteConfig.countries.join(' and ')} with plans to expand our reach as we grow. Our platform is accessible globally.
					</p>
				</CardContent>
			</Card>

			<Card class="zen-card p-8 text-left">
				<CardHeader class="pb-6">
					<CardTitle class="text-lg font-light">How can businesses partner with you?</CardTitle>
				</CardHeader>
				<CardContent>
					<p class="text-sm text-muted-foreground zen-text">
						We welcome partnerships with businesses looking to integrate our tools or collaborate on digital solutions. Contact us to discuss partnership opportunities and benefits.
					</p>
				</CardContent>
			</Card>
		</div>
	</div>
</section>