{/* <div className="igahabee">
<div className="company">
  <h1>SomBooks</h1>
  <p>
    Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed
    do eiusmod tempor incididuntut consec tetur adipisicing
    elit,Lorem ipsum dolor sit amet.
  </p>
</div>
<div className="usefullinks">
  <h1>Quick menus</h1>
  <List className="uselinks">
    <ListItem onClick={sidebarCloseHandler}>
      <NextLink href="/">
        <Link style={{ color: 'black' }}>
          Home
          <br />
        </Link>
      </NextLink>
    </ListItem>
    <ListItem onClick={sidebarCloseHandler}>
      <NextLink href="" onClick={submitHandler}>
        <Link style={{ color: 'black' }}>All books</Link>
      </NextLink>
    </ListItem>
    <ListItem>
      <NextLink href="/About">
        <Link style={{ color: 'black' }}>About</Link>
      </NextLink>
    </ListItem>
    {categories.map((category) => (
      <NextLink
        key={category}
        href={`/search?category=${category}`}
        passHref
      >
        <ListItem
          button
          component="a"
          onClick={sidebarCloseHandler}
        >
          <NextLink href="" onClick={submitHandler}>
      <Link style={{ color: 'black' }}>All books</Link>
    </NextLink>
          <ListItemText primary={category}></ListItemText>
        </ListItem>
      </NextLink>
    ))}
  </List>
</div>
<div className="contact-us">
  <h1>contact us</h1>
  <MdOutlineEmail /> som@gmail.com <br />
  <AiFillPhone /> +252 619779420
  <br />
  <br />
  <div className="soc-icons">
   
  </div>
</div>
</div> */}