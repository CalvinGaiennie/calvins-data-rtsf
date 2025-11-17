export const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
    const baseClasses = "nav-link fs-5";
    const activeClasses =
      "text-primary fw-bold border-bottom border-2 border-primary";
    const inactiveClasses = "text-dark";

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };