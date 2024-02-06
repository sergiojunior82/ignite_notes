import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

import avatarCover from './../assets/avatar-cover.png';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        src={avatarCover}
        className={styles.cover}
        />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/sergiojunior82.png" />
        <strong>Sergio Nascimento</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}