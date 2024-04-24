import Container from "../container/Container";
import Logo from "../shared/logo/Logo";
import Menu from "./Menu";

const Header = () => {
    return (
        <Container>
            <Logo />
            <Menu />
        </Container>
    );
};

export default Header;