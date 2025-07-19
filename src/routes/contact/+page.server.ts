import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import type { Actions } from './$types';

// Form validation schema
const contactSchema = z.object({
	firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
	lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
	email: z.string().email({ message: 'Please enter a valid email address' }),
	subject: z.string().min(1, 'Subject is required').max(100, 'Subject is too long'),
	message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long')
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		
		// Convert FormData to object
		const data = {
			firstName: formData.get('firstName') as string,
			lastName: formData.get('lastName') as string,
			email: formData.get('email') as string,
			subject: formData.get('subject') as string,
			message: formData.get('message') as string
		};

		// Validate with Zod
		const result = contactSchema.safeParse(data);

		if (!result.success) {
			const fieldErrors: Record<string, string[]> = {};
			
			result.error.issues.forEach((issue) => {
				const field = issue.path[0] as string;
				if (!fieldErrors[field]) {
					fieldErrors[field] = [];
				}
				fieldErrors[field].push(issue.message);
			});

			return fail(400, {
				fieldErrors,
				data
			});
		}

		// Simulate form processing (since the form is not working right now)
		// In a real implementation, you would send the email here
		try {
			// Simulate async operation
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			// For demo purposes, we'll always return success
			return {
				success: true,
				message: 'Thank you for your message! Please note: This is currently a placeholder form - the actual email delivery is not yet implemented. We will get back to you soon once this feature is fully functional.'
			};
		} catch (error) {
			return fail(500, {
				fieldErrors: { general: ['Failed to send message. Please try again.'] },
				data
			});
		}
	}
};