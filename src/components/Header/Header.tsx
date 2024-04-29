import FlexBetween from "../FlexBetween";
import Logo from "../shared/logo/Logo";
import Menu from "./Menu";

const Header = () => {
    return (
        <FlexBetween>
            <Logo />
            <Menu />
        </FlexBetween>
    );
};

export default Header;