import { SharedLayout } from '@/app/shared-layout'

export default function KeystaticLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<SharedLayout>
			<main>{children}</main>
		</SharedLayout>
	)
}
