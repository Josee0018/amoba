import PropTypes from "prop-types";
import Button from "../Button";
import NavBar from "../NavBar";

function PrivateSectionContainer(props) {
  const { children, customClasses, isForm } = props;
  const formHeaderClasses = isForm ? "mt-2" : "";
  return (
    <div
      className={`bg-white-100 lg:shadow lg:p-8 rounded-lg lg:rounded-2xl text-black-100 ${customClasses} ${formHeaderClasses}`}
    >
      <div className="flex justify-stretch">
        <NavBar />
        <div className="w-full p-4">
          <Button customClassName="w-full h-28 bg-sky-900" />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

PrivateSectionContainer.propTypes = {
  children: PropTypes.any.isRequired,
  customClasses: PropTypes.string,
  isForm: PropTypes.bool,
};

PrivateSectionContainer.defaultProps = {
  customClasses: "",
  isForm: false,
};

export default PrivateSectionContainer;
