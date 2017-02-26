resolvers += "Sonatype OSS Snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"

name := "front-end=app"
version := "2.12.1"
scalaVersion := "2.12.1"

lazy val jacksonVersion = "2.8.6"

libraryDependencies := Seq(
  "org.scala-lang.modules" %% "scala-java8-compat" % "0.8.0",
  "org.eclipse.jetty" % "jetty-server" % "9.3.11.v20160721",
  "org.eclipse.jetty" % "jetty-servlet" % "9.3.11.v20160721",
  "org.jboss.resteasy" % "resteasy-jaxrs" % "3.0.19.Final",
  "org.jboss.resteasy" % "resteasy-jackson2-provider" % "3.0.19.Final",
  "org.jboss.resteasy" % "async-http-servlet-3.0" % "3.0.19.Final",
  "com.fasterxml.jackson.datatype" % "jackson-datatype-jsr310" % jacksonVersion,
  "com.fasterxml.jackson.module" %% "jackson-module-scala" % jacksonVersion,
  "com.fasterxml.jackson.core" % "jackson-databind" % jacksonVersion,
  "com.fasterxml.jackson.datatype" % "jackson-datatype-jsr310" % jacksonVersion
)


