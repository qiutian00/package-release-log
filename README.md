In this example, we first use the fs module to write the release notes for the major version to a text file. We construct the file name using the package name and the version number, and we use the fs.writeFile method to write the release notes to the file. Once the write operation completes, we print a message indicating whether the write was successful or not.

Note that this code assumes that the current working directory is writable and that the user has permission to create files in the current working directory. If the current working directory is not writable or if the user does not have permission to create files in the current working directory, the code will fail with a file system error.