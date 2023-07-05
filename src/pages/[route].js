import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Error from 'next/error'
import Link from 'next/link'

// customize this


export default function ResolveRoute() {
  const router = useRouter()

  useEffect(() => {
    const { pathname } = router;

    if (pathname !== pathname.toLowerCase()) {
      router.push(pathname.toLowerCase())
    }
  },[router])

  return(
    <div className=''>
      <div className='p-8'>
        <Link href={"/"} className='font-bold bg-gray-500 rounded m-4 p-2'>Go back </Link>
      </div>
      <Error statusCode={404} />
    </div>
    )
}