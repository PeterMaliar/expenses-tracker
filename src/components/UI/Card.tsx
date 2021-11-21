import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   theme: string
}

const Card = ({children, theme, className}: CardProps): JSX.Element => {
   return (
      <div className={`card ${className} ${theme === "dark" ? "card--dark" : "card--light"}`}>
         {children}
      </div>
   )
}

export default Card
