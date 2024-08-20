Split e\-mail addresses[¶](#split-e-mail-addresses "Permalink to this heading")
===============================================================================


Split an e\-mail address into two parts: the local part (before the @) and the domain (after the @).


This processor generates two output columns, prefixed by the input column name. If the input doesn’t contain a valid email address, the processor will not produce an output value.



Example[¶](#example "Permalink to this heading")
------------------------------------------------


From the input column `email` two output columns are created: `email_localpart` and `email_domain`. The `email` column also is preserved in the output dataset.


Input `myemail@domain.com` becomes two values: `myemail` and `domain.com`.