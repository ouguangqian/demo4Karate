# demo4Karate
https://www.cnblogs.com/ouguangqian/p/karate_learn.html涉及的代码

# 介绍
在这篇文章中，我们将介绍一下开源的Web-API自动化测试框架——Karate
Karate是基于另一个BDD测试框架Cucumber来建立的，并且共用了一些相同的思想。其中之一就是使用Gherkin文件，该文件描述了被测试的功能
与Cucumber不同的是测试用例不需要用Java编写，并且被完整的描述在Gherkin文件中
通过Karate，您可以编写任何类型的Web服务端的测试脚本，并检查响应是否符合预期
Karate的验证引擎可以灵活的比较两个JSON或XML文件内容，不受空格和数据顺序的影响
有关Karate的更详细的内容，请参考[Karate官方介绍](https://github.com/intuit/karate)
# 特点
1. 建立在Cucumber-JVM基础上
2. 可以像标准的Java工程一样运行测试并且产生报告
3. 测试代码的开发不需要掌握任何的Java知识
4. 即使对非编程人员，测试代码也很容易编写
# 环境需求
- JDK1.8及以上
- Maven
- IDEA

# 使用
## 创建工程
1. 打开IDEA，File|New|Project
![新建工程](https://images2018.cnblogs.com/blog/582654/201809/582654-20180903165714714-624839417.png)
2. 选择Maven工程，点击Next
![选择Maven](https://images2018.cnblogs.com/blog/582654/201809/582654-20180903165741825-961945838.png)
3. 输入Maven基本信息，点击Next
![输入基本信息](https://images2018.cnblogs.com/blog/582654/201809/582654-20180903165930802-680044112.png)
4. 输入工程名称和存放路径，点击Finish
![工程目录结构](https://images2018.cnblogs.com/blog/582654/201809/582654-20180903165941881-1657542039.png)
## 添加依赖
要在Maven项目中使用Karate，需要将karate-apache依赖项添加到pom.xml,如果实现JUnit测试还需要添加karate-junit4依赖
```
<dependencies>
    <dependency>
        <groupId>com.intuit.karate</groupId>
        <artifactId>karate-apache</artifactId>
        <version>0.8.0</version>
        <scope>test</scope>
    </dependency>

     <dependency>
        <groupId>com.intuit.karate</groupId>
        <artifactId>karate-junit4</artifactId>
        <version>0.8.0</version>
        <scope>test</scope>
    </dependency>

</dependencies>
```
设置测试资源文件目录，建议测试用例文件和java文件放在同一个目录下，遇到庞大的工程的时候方便管理，不必在文件夹src/test/java和src/test/resources文件夹之间切换，可以在pom.xml的<build>标签中添加一下设置
```
<testResources>
    <testResource>
        <directory>src/test/java</directory>
        <excludes>
            <exclude>**/*.java</exclude>
        </excludes>
    </testResource>
</testResources>
```
## 服务端模拟
为了演示REST API，我们使用WireMock服务器
在pom.xml中添加mock服务依赖配置
```
<dependency>
    <groupId>com.github.tomakehurst</groupId>
    <artifactId>wiremock-standalone</artifactId>
    <version>2.18.0</version>
    <scope>test</scope>
</dependency>

```
编写一个启动服务的类
``` java
package server;

import com.github.tomakehurst.wiremock.WireMockServer;

import static com.github.tomakehurst.wiremock.client.WireMock.*;

public class StartServer {

    private static WireMockServer wireMockServer = new WireMockServer(8080);

    public static void startServer(){
        wireMockServer.start();

        stubFor(
                get(urlEqualTo("/user/get"))
                        .willReturn(aResponse()
                                .withStatus(200)
                                .withHeader("Content-Type", "application/json")
                                .withBody("{ \"id\": \"1234\", name: \"John Smith\" }")));

        stubFor(
                post(urlEqualTo("/user/create"))
                        .withHeader("content-type", equalTo("application/json"))
                        .withRequestBody(containing("id"))
                        .willReturn(aResponse()
                                .withStatus(200)
                                .withHeader("Content-Type", "application/json")
                                .withBody("{ \"id\": \"1234\", name: \"John Smith\" }")));

    }

   public static void main(String... args){
        startServer();
   }
}
```
## 用例文件编写
一个用例文件以“ .feature”扩展名保存。
文件以Feature关键字开头，在同一行跟着所测试的功能名称
一个用例文件包含不同的测试场景，每个场景都以关键字Scenario开头，并且包含多个步骤。这些步骤包含关键字Given，When，Then，And和But
有关Cucumber和Gherkin结构的更多信息，请[点击此处](https://cucumber.io)
``` gherkin
Feature: Learn How to use Karate for testing.

  Scenario: Testing valid GET endpoint

    Given url 'http://localhost:8080/user/get'
    When method GET
    Then status 200

  Scenario: Testing the exact response of a GET endpoint

    Given url 'http://localhost:8080/user/get'
    When method GET
    Then status 200
    And match $ == {id:"1234", name:"John Smith"}

  Scenario: Testing that GET response contains specific field

    Given url 'http://localhost:8080/user/get'
    When method GET
    Then status 200
    And match $ contains {id:"1234"}

```
## Runner类编写
建议放在用例文件同级目录下
我们可以通过将Karate与JUnit集成来运行我们的测试
我们将使用@CucumberOptions注解指定Feature文件的具体位置
``` java
package demo;

import com.intuit.karate.junit4.Karate;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;


@RunWith(Karate.class)
@CucumberOptions(features = "classpath:demo/demo.feature")

public class DemoRunner {

}

```
## 运行用例
1. 先启动服务	
	右击StartServer类选择Run StartServer.main()启动服务
	
2. 运行用例	
	右击DemoRunner类选择Run DemoRunner运行测试
![用例运行结果](https://images2018.cnblogs.com/blog/582654/201809/582654-20180903171636128-1766347980.png)
## 查看报告
在项目的target/surfire-reports目录下有TEST-demo.demo.html文件，浏览器中打开即可看到结果
![报告查看](https://images2018.cnblogs.com/blog/582654/201809/582654-20180903171712972-581845035.png)

# 持续集成
可以借助于jenkins完成自动化测试并且jenkins提供插件cucumber-reports可以展示可读性强的自动化测试报告
需要修改Runner继承KarateRunner，先引入Karate-testng依赖
```
<dependency>
    <groupId>com.intuit.karate</groupId>
    <artifactId>karate-testng</artifactId>
    <version>0.8.0</version>
</dependency>

```
修改DemoRunner，注意配置CucumberOptions，要产生json格式的报告，cucumber-reports插件会去解析该文件并生成报告
``` java
package demo;

import com.intuit.karate.junit4.Karate;

import com.intuit.karate.testng.KarateRunner;
import cucumber.api.CucumberOptions;
import org.junit.runner.RunWith;



@CucumberOptions(features = "classpath:demo/demo.feature",format={"pretty","html:reports","json:report.json"})

public class DemoRunner extends KarateRunner {

}

```
jenkins中cucumber-reports配置请参考网络资源
jenkins配置命令行运行指令
> rm -rf ${WORKSPACE}/report.json
> cd /home/pateo/IdeaProjects/demo4karate
> mvn test -Dtest=DemoRunner
> cp report.json ${WORKSPACE}/report.json

![](https://img2018.cnblogs.com/blog/582654/201809/582654-20180904151708741-2136368833.png)

## jenkins报告展示
![](https://img2018.cnblogs.com/blog/582654/201809/582654-20180904151410066-1550993609.png)
