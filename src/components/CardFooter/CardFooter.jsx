import "./CardFooter.scss"

export const CardFooter = ({
  children
}) => {
    return (
        <footer className="card-footer">
          {children}
        </footer>
    )
}