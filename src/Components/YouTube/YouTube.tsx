import "./YouTube.css";

function YouTube(): JSX.Element {
    return (
        <div className="YouTube">
            <p>הנעליים המכוערות ביותר בעולם כולו</p>
            <p>{isSundayOrMonday() && <span>רק היום, מבצע מטורף, הנעל המכוערת ביותר בעולם ב 9.99 ש"ח בלבד</span>}</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/7LKVCtIT1iI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    );
}

function isSundayOrMonday(): boolean {
    const now = new Date();
    const dayOfWeek = now.getDay() + 1;
    return dayOfWeek <= 2;
}

export default YouTube;
