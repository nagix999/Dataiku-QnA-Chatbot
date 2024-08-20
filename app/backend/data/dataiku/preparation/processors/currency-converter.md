Convert currencies[¶](#convert-currencies "Permalink to this heading")
======================================================================


This processor converts a column with monetary data from one currency to
another.


It supports around 40 currencies with historical data



Input currency[¶](#input-currency "Permalink to this heading")
--------------------------------------------------------------


The processor can either use a constant input currency, or read a
different input currency from a dedicated column. This can be used to
‘realign’ different input currencies to a single output




Output currency[¶](#output-currency "Permalink to this heading")
----------------------------------------------------------------


The processor outputs all output in the same currency




Reference date[¶](#reference-date "Permalink to this heading")
--------------------------------------------------------------


The processor includes historical data for the currencies. You can
either set the conversion to a fixed date, or use a Date\-typed column to
use a different reference date for each row