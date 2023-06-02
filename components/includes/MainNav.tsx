import Link from 'next/link'
import { client, MenuLocationEnum } from '@client'
import styles from '@styles/modules/MainNav.module.css'

export default function MainNav() {
  const { menuItems } = client.useQuery()
  const links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes

  return (
    <>
      <nav>
        <ul className={styles['main-nav']}>
          {links?.map(link => (
            <li key={`${link.label}$-menu`}>
              <Link href={link.url ?? ''}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}