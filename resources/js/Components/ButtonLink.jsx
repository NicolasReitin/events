import { Link } from '@inertiajs/react'
import React from 'react'

export default function ButtonLink({hrefLink}) {
  return (
    <>
        <div className='flex justify-center'>
            <Link
            href={hrefLink}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                Reserver
            </Link>
        </div>
    </>
  )
}
