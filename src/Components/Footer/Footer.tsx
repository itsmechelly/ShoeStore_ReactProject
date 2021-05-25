import "./Footer.css";

function Footer(): JSX.Element {

    const now = new Date();
    const year = now.getFullYear();

    return (
        <div className="Footer">
			<p>כל הזכויות שמורות – מוישה אופניק אתרים | {year}</p>
        </div>
    );
}

export default Footer;
