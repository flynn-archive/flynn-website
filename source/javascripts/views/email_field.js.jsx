/** @jsx React.DOM */

Flynn.Views.EmailField = React.createClass({
	displayName: "Flynn.Views.EmailField",

	getInitialState: function () {
		return {
			valid: null,
			msg: null
		};
	},

	getDefaultProps: function () {
		return {
			validationRegex: /^[^\s]+@[^\s]+\.[^\s]+$/
		};
	},

	handleValueUpdated: function (newValue) {
		this.props.handleValuesUpdated({
			email: newValue
		});
	},

	performValidation: function (value, showError, callbacks) {
		if (this.props.validationRegex.test(value)) {
			this.setState({
				valid: true,
				msg: null
			});
			if (callbacks) {
				callbacks.success();
			}
		} else if (showError) {
			this.setState({
				valid: false,
				msg: "Please provide a valid email address."
			});
			if (callbacks) {
				callbacks.failure();
			}
		}
	},

	render: function () {
		var InputField = Flynn.Views.InputField;

		return (
			<InputField
				type="text"
				name={this.props.name}
				label={this.props.label}
				placeholder={this.props.placeholder}
				valid={this.state.valid}
				msg={this.state.msg}
				performValidation={this.performValidation}
				handleValueUpdated={this.handleValueUpdated}
				initialValue={this.props.initialValue}
			/>
		);
	}
});
