WARN\_JVM\_CONFIG\_KERNEL\_XMX\_OVER\_THRESHOLD: Xmx value for kernel over threshold[¶](#warn-jvm-config-kernel-xmx-over-threshold-xmx-value-for-kernel-over-threshold "Permalink to this heading")
===================================================================================================================================================================================================


If the maximum heap size (Xmx option) value for either kernel (JEK or FEK) is too big, it can lead to
potential memory exhaustion on the machine. This is because the allocated memory is multiplied by the
number of JEKs and FEKs. Therefore, it is advisable for users to avoid setting an excessively large
Xmx value for these kernels to prevent memory\-related issues.



Remediation[¶](#remediation "Permalink to this heading")
--------------------------------------------------------


Modify the fek.xmx or jek.xmx option in the $DSS\_HOME/install.ini file so it doesn’t exceed 4g.
See [Tuning and controlling memory usage](../../operations/memory.html).