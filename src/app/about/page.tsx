import { getSiteSettings } from '@/sanity/lib/fetch';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

export default async function AboutPage() {
	const siteSettings = await getSiteSettings();

	return (
		<div className='py-12 bg-background min-h-screen'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h1 className='text-4xl font-bold text-foreground mb-8 text-center'>
					Our Story
				</h1>

				{/* Main About Content */}
				<div className='prose prose-lg max-w-none mb-12 prose-headings:text-foreground prose-p:text-foreground/80 prose-strong:text-foreground'>
					{siteSettings?.aboutText ? (
						<PortableText value={siteSettings.aboutText} />
					) : (
						<>
							<p className='text-foreground/80 mb-6'>
								SpinEarz was born from a unique vision:
								transforming the artistry of fishing lures into
								wearable jewelry that tells a story. Our
								founder, an avid angler and creative soul, saw
								beauty in the colorful, intricate designs of
								vintage and modern fishing lures.
							</p>

							<p className='text-foreground/80 mb-6'>
								What started as a hobby quickly grew into a
								passion project. Friends and family were
								captivated by these one-of-a-kind pieces, and
								soon SpinEarz was officially launched to share
								these unique creations with the world.
							</p>

							<h2 className='text-2xl font-bold text-foreground mt-8 mb-4'>
								The Art of Transformation
							</h2>

							<p className='text-foreground/80 mb-6'>
								Each SpinEarz creation begins with carefully
								selected fishing lures. We source authentic
								lures from various suppliers, estate sales, and
								fishing enthusiasts who appreciate seeing their
								beloved tackle transformed into art.
							</p>
						</>
					)}
				</div>

				{/* Process Section */}
				<div className='bg-muted rounded-lg p-8 mb-12'>
					<h2 className='text-2xl font-bold text-foreground mb-6'>
						Our Process
					</h2>

					<div className='space-y-6'>
						<div className='flex items-start'>
							<div className='flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center'>
								<span className='text-primary font-bold'>
									1
								</span>
							</div>
							<div className='ml-4'>
								<h3 className='font-semibold text-foreground mb-1'>
									Selection
								</h3>
								<p className='text-foreground/80'>
									We carefully choose lures based on their
									color, design, and overall aesthetic appeal.
								</p>
							</div>
						</div>

						<div className='flex items-start'>
							<div className='flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center'>
								<span className='text-primary font-bold'>
									2
								</span>
							</div>
							<div className='ml-4'>
								<h3 className='font-semibold text-foreground mb-1'>
									Safety First
								</h3>
								<p className='text-foreground/80'>
									All hooks and sharp components are
									professionally removed, and edges are
									smoothed for comfort.
								</p>
							</div>
						</div>

						<div className='flex items-start'>
							<div className='flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center'>
								<span className='text-primary font-bold'>
									3
								</span>
							</div>
							<div className='ml-4'>
								<h3 className='font-semibold text-foreground mb-1'>
									Attachment
								</h3>
								<p className='text-foreground/80'>
									Hypoallergenic ear wires are securely
									attached using professional jewelry-making
									techniques.
								</p>
							</div>
						</div>

						<div className='flex items-start'>
							<div className='flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center'>
								<span className='text-primary font-bold'>
									4
								</span>
							</div>
							<div className='ml-4'>
								<h3 className='font-semibold text-foreground mb-1'>
									Quality Check
								</h3>
								<p className='text-foreground/80'>
									Each piece is inspected for balance,
									comfort, and overall quality before
									packaging.
								</p>
							</div>
						</div>
					</div>

					{/* Conversion Process Image */}
					<div className='mt-8 flex justify-center'>
						<div className='relative w-full max-w-md'>
							<Image
								src='/spinearz-logo.jpeg'
								alt='SpinEarz - If Fish Had Earz'
								width={400}
								height={400}
								className='rounded-lg shadow-lg'
							/>
						</div>
					</div>
				</div>

				{/* Quality & Safety */}
				<div className='bg-primary/10 rounded-lg p-8 mb-12'>
					<h2 className='text-2xl font-bold text-foreground mb-4'>
						Quality & Safety
					</h2>
					<ul className='space-y-3 text-foreground/80'>
						<li className='flex items-start'>
							<svg
								className='w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 13l4 4L19 7'
								/>
							</svg>
							All sharp hooks and barbs are professionally removed
						</li>
						<li className='flex items-start'>
							<svg
								className='w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 13l4 4L19 7'
								/>
							</svg>
							Hypoallergenic surgical steel or sterling silver ear
							wires
						</li>
						<li className='flex items-start'>
							<svg
								className='w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 13l4 4L19 7'
								/>
							</svg>
							Lightweight and comfortable for all-day wear
						</li>
						<li className='flex items-start'>
							<svg
								className='w-6 h-6 text-primary mt-0.5 mr-3 flex-shrink-0'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M5 13l4 4L19 7'
								/>
							</svg>
							Each pair is unique - no two are exactly alike
						</li>
					</ul>
				</div>

				{/* Care Instructions */}
				{siteSettings?.careInstructions && (
					<div className='border-t border-border pt-8'>
						<h2 className='text-2xl font-bold text-foreground mb-4'>
							Care Instructions
						</h2>
						<p className='text-foreground/80 whitespace-pre-line'>
							{siteSettings.careInstructions}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
