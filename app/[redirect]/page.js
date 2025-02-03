import { redirect } from "next/navigation";

const redirects = {
    "calendar": "https://calendar.google.com/calendar/u/1?cid=Y185ZWUyZDA2N2FiMWY2ZTI5MGJmNjJlYmFhN2EzZWZiZmM1MzQxMDhkNTNjZThlYzU4ZjM4MzA4MTNiZjM4YzE3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
    "join": "https://discord.gg/QJkEjqW7zZ",
    "elko": "https://confluence.garage.ualberta.ca/category/train",
    "e": 'https://eclass.srv.ualberta.ca/my/',
    "c": 'https://canvas.ualberta.ca/',
    "thundertech": "thundertechrobotics.ca",
    "thundertechroboticsexposed": "https://www.youtube.com/watch?v=dQw4w9WgXc"
};

export default function RedirectPage({ params }) {
    const targetUrl = redirects[params.redirect];

    if (targetUrl) {
        redirect(targetUrl);
    }

    return <p>Page not found</p>;
}
