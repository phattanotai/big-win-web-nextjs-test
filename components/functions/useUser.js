import React, { useEffect } from "react";
import Router from "next/router";
import Cookies from "js-cookie";

const checkLogin = (path, redirectIfFound ) => {
  const {pathname} = Router;
  if (!Cookies.get("member") && redirectIfFound) {
    if(pathname === '/register'){
      Router.push("/register");
    }else if(pathname === '/home') {
      Router.push('/');
    }else{
      Router.push(pathname);
    }
  }else{ 
    if(pathname !== '/register' && pathname !== '/'){
      Router.push(pathname);
    }else{
      Router.push('/home');
    }
  }
};

const encode = (data) => {
  console.log(data)
  return  window.btoa(JSON.stringify(data)) 
}

const decode = (data) => {
  return JSON.parse(window.atob(data));
}

const validate = (fieldName, elements) => {
  var faIcon = {
		valid: 'fa fa-check-circle fa-lg text-success',
		invalid: 'fa fa-times-circle fa-lg',
		validating: "fa fa-refresh"
	};
	$(fieldName).bootstrapValidator({
		message: "This value is not valid",
		feedbackIcons: faIcon,
		excluded: [':disabled'],
		fields: elements
	}).on("status.field.bv", function (e, data) {
		e.preventDefault();
		var $parent = data.element.parents(".form-group");
		// Remove the has-success class
		$parent.removeClass("has-success");
	});
	$(fieldName).bootstrapValidator("validate");
	if ($(".has-error").length == 0) {
		return true;
	} else {
		if ($('.form-group.selectpicker').hasClass('has-error')) {
			$('.form-group.selectpicker').find('.btn-group.bootstrap-select.form-control').find('.btn.dropdown-toggle.btn-default.bs-placeholder').attr('style', 'border-color : #f55a4e !important');
		} else {
			$('.form-group.selectpicker').find('.btn-group.bootstrap-select.form-control').find('.btn.dropdown-toggle.btn-default').removeAttr('style');
		}
		return false;
	}
}

export default {validate,decode,encode, checkLogin };
