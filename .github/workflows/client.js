app_server_root\bin\wsimport.bat wsdl_URL 
app_server_root/bin/wsimport.sh wsdl_URL
app_server_root/bin/wsimport wsdl_URL
wsimport -keep -wsdllocation /META-INF/wsdl/MyService.wsdl
<?xml version="1.0" encoding="UTF-8"?>
<!--
 * This program can be used, run, copied, modified and distributed
 * without royalty for the purpose of developing, using, marketing, or distributing.
 -->
<wsdl:definitions xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
	xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
	xmlns:tns="http://com/ibm/was/wssample/sei/ping/"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="PingService"
	targetNamespace="http://com/ibm/was/wssample/sei/ping/">
	<wsdl:types>
		<xsd:schema
			targetNamespace="http://com/ibm/was/wssample/sei/ping/"
			xmlns:xsd="http://www.w3.org/2001/XMLSchema">


			<xsd:element name="pingStringInput">
				<xsd:complexType>
					<xsd:sequence>
						<xsd:element name="pingInput" type="xsd:string" />
					</xsd:sequence>
				</xsd:complexType>
			</xsd:element>
		</xsd:schema>
	</wsdl:types>
	<wsdl:message name="pingOperationRequest">
		<wsdl:part element="tns:pingStringInput" name="parameter" />
	</wsdl:message>
	<wsdl:portType name="PingServicePortType">
		<wsdl:operation name="pingOperation">
			<wsdl:input message="tns:pingOperationRequest" />

		</wsdl:operation>
	</wsdl:portType>
	<wsdl:binding name="PingSOAP" type="tns:PingServicePortType">
		<soap:binding style="document"
			transport="http://schemas.xmlsoap.org/soap/http" />
		<wsdl:operation name="pingOperation">
			<soap:operation soapAction="pingOperation" style="document" />
			<wsdl:input>
				<soap:body use="literal" />
			</wsdl:input>
		</wsdl:operation>
	</wsdl:binding>
	<wsdl:service name="PingService">
		<wsdl:port binding="tns:PingSOAP" name="PingServicePort">
			<soap:address
				location="http://localhost:9080/WSSampleSei/PingService" />
		</wsdl:port>
	</wsdl:service>
</wsdl:definitions>
app_server_root\bin\wsimport.bat -keep -verbose ping.wsdl
. ./setupCmdLine.sh  (Notice the space between the periods.)
  app_server_root/bin/wsimport.sh -keep -verbose ping.wsdl 
app_server_root/bin/wsimport -keep -verbose ping.wsdl
com\ibm\was\wssample\sei\ping\ObjectFactory.java
com\ibm\was\wssample\sei\ping\package-info.java
com\ibm\was\wssample\sei\ping\PingServicePortType.java
com\ibm\was\wssample\sei\ping\PingService.java
com\ibm\was\wssample\sei\ping\PingStringInput.java
