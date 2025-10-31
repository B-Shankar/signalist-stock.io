import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <TrendingUp className="h-16 w-16 text-gray-400 mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                404 - Page Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/">
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}
