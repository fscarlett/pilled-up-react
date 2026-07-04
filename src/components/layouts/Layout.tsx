import Header from './Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className='mx-auto w-full max-w-337.5 px-4'>
        {children}
      </main>
    </div>
  )
}
export default Layout
