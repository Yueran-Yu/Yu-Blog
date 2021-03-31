
## BrowserRouter
A ```<Router>``` that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.

```javascript
      <BrowserRouter
        basename={optionalString}
        forceRefresh={optionalBool}
        getUserConfirmation={optionalFunc}
        keyLength={optionalNumber}
        >
        <App />
      </BrowserRouter>
```

### basename: string
The base URL for all locations. If your app is served from a sub-directory on your server, you'll want to set this to the sub-directory. A properly formatted basename should have a leading slash, but no trailing slash.

```javascript
    <BrowserRouter basename='/calendar'>
    <Link to='/today' /> // renders <a href="/calendar/today">
    <Link to="/tomorrow" /> // renders <a href="/calendar/tomorrow">
    </BrowserRouter>
```

### getUserConfirmation: func
A function to use to confirm navigation. Defaults to using window.confirm.
```javascript
    <BrowserRouter>
        getUserConfirmation={(message, callback)} =>{
          // this is the default behavior
          const allowTransition = window.confirm(message)
          callback(allowTransition)
        }
    </BrowserRouter>
```
### forceRefresh: bool
If true the router will use full page refreshes on page navigation. You may want to use this to imitate the way a traditional server-rendered app would work with full page refreshes between page navigation.
```javascript
    <BrowserRouter forceRefresh={true}>
```

最近事情太多了，我胃不舒服


