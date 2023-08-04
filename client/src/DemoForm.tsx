import { Button } from './components/ui/button'

const DemoForm = () => {
  const handleSubmit = () => {
    console.log('Form submitted')
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Enter name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Enter email" />
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input type="date" name="dob" id="dob" />
      </div>
      <div>
        <label htmlFor="bio">Description</label>
        <textarea
          name="bio"
          id="bio"
          cols={30}
          rows={2}
          placeholder="Enter description"
        ></textarea>
      </div>
      <fieldset>
        <p>Gender</p>
        <div>
          <input type="radio" name="gender" id="male" value="M" />
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="F" />
          <label htmlFor="female">Female</label>
        </div>
      </fieldset>
      <Button asChild type="submit">
        <button>Submit</button>
      </Button>
    </form>
  )
}

export default DemoForm
