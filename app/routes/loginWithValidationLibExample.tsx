// // Using yup in this example, but you can use anything
// const validator = withYup(
//   yup.object({
//     firstName: yup.string().label('First Name').required(),
//     lastName: yup.string().label('Last Name').required(),
//     email: yup.string().email().label('Email').required(),
//   })
// );

// export const action: ActionFunction = async ({ request }) => {
//   const fieldValues = await validator.validate(await request.formData());
//   if (fieldValues.error) return validationError(fieldValues.error);
//   const { firstName, lastName, email } = fieldValues.data;

//   // Do something with correctly typed values;

//   return redirect('/');
// };
