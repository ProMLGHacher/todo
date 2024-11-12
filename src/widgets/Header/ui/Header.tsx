import { Logo } from '@/shared/ui/logo'
import cls from './Header.module.scss'

export const Header = () => {
  return (
    <header className={cls.header}>
        <Logo />
    </header>
  )
}
