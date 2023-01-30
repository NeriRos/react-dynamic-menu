import clsx from "clsx";
import styles from "./Menu.module.css";
import { useEffect } from "react";
import { useState } from "react";

export const Menu = ({ items = [] }) => {
  return (
    <div className={styles.container}>
      <MenuList items={items} isSub={false} />
    </div>
  );
};

export const MenuList = ({ isSub, items = [] }) => {
  const [isRow, setIsRow] = useState();

  useEffect(() => {
    if (!items.some((item) => item.children?.length > 0)) {
      setIsRow(true);
    }
  }, [items]);

  return (
    <ul
      className={clsx(
        styles.list,
        isRow && styles.isRow,
        isSub && styles.isSub,
        items.length > 0 && styles.hasChildren
      )}
    >
      {items.map((child) => (
        <MenuItem key={child.title} item={child} isSub={isSub} />
      ))}
    </ul>
  );
};

export const MenuItem = ({ item, isSub }) => {
  const [isHover, setIsHover] = useState();
  const hasChildren = item.children?.length > 0;

  return (
    <li
      key={item.title}
      className={clsx(
        styles.menuItem,
        isHover && styles.hover,
        isSub && styles.isSub,
        hasChildren && styles.hasChildren
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={(e) => {
        setIsHover(false);
      }}
    >
      <a className={styles.item} href={item.link}>
        {item.title}
      </a>

      {hasChildren ? <MenuList items={item.children} isSub={true} /> : null}
    </li>
  );
};
