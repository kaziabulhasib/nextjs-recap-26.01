import Link from "next/link";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <aside>
        <nav className='flex flex-row gap-2'>
          <ul>
            <li>
              <Link href='/private'>Private</Link>
            </li>
            <li>
              <Link href='private/secret'>secret</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
    </section>
  );
}
