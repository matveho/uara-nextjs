import Image from "next/image";

export const Header = () => {
    return (
        <header className="parallax-header">
            {/* Centered Logo Container */}
            <div className="logo-container">
                <Image
                    src="/assets/Logo.svg"
                    alt="UARA"
                    width={200}
                    height={200}
                    priority
                />
            </div>
        </header>
    );
};
