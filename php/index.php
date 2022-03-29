<html>
 <head>
  <title>PHP Greeting</title>
 </head>
 <body>
    <h1>Hello: <?php echo $_POST["username"] ?  $_POST["username"] : '?'; ?></h1>
 <Form method="post">
        <p>
          <label>
            Username:
            <input type="text" name="username" className="border rounded" />
          </label>
        </p>
          <button type="submit">Submit</button>
    
      </Form>
 </body>
</html>