

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>TaskTrack</h1>
            <p>Simple Task Management App</p>
        </header>
    );
};

const styles = {
    header: {
        textAlign: "center" as const,
        marginBottom: "30px",
    },
};

export default Header;

